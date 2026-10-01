import { useMemo, useState, type ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { findAmounts } from '../core/amounts/findAmounts';
import { formatKurus } from '../core/amounts/format';
import { toCalendarDate } from '../core/dates/calendar';
import { findDates } from '../core/dates/findDates';
import { formatDate } from '../core/dates/format';
import { SAMPLES } from './samples';

type Kind = 'date' | 'amount';

interface Highlight {
  index: number;
  length: number;
  kind: Kind;
}

/** Splits the text into plain and highlighted pieces so the matches can be marked in place. */
function splitByHighlights(text: string, highlights: Highlight[]): { text: string; kind?: Kind }[] {
  const pieces: { text: string; kind?: Kind }[] = [];
  let cursor = 0;
  for (const h of [...highlights].sort((a, b) => a.index - b.index)) {
    if (h.index < cursor) continue;
    if (h.index > cursor) pieces.push({ text: text.slice(cursor, h.index) });
    pieces.push({ text: text.slice(h.index, h.index + h.length), kind: h.kind });
    cursor = h.index + h.length;
  }
  if (cursor < text.length) pieces.push({ text: text.slice(cursor) });
  return pieces;
}

function Section({ title, count, children }: { title: string; count: number; children: ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        {title} <Text style={styles.sectionCount}>({count})</Text>
      </Text>
      {children}
    </View>
  );
}

/**
 * A developer screen for trying the Turkish recognizers on a phone: paste any
 * text and see what the app finds in it. Runs in Expo Go, no native build needed.
 */
export function RecognitionPlayground() {
  const [text, setText] = useState('');
  const reference = useMemo(() => toCalendarDate(new Date()), []);
  const dates = useMemo(() => findDates(text, reference), [text, reference]);
  const amounts = useMemo(() => findAmounts(text), [text]);
  const pieces = useMemo(
    () =>
      splitByHighlights(text, [
        ...dates.map((m) => ({ index: m.index, length: m.length, kind: 'date' as const })),
        ...amounts.map((m) => ({ index: m.index, length: m.length, kind: 'amount' as const })),
      ]),
    [text, dates, amounts],
  );
  const hasText = text.trim().length > 0;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      contentInsetAdjustmentBehavior="automatic"
      keyboardShouldPersistTaps="handled"
      automaticallyAdjustKeyboardInsets
    >
      <Text style={styles.intro}>
        Bir mesajı ya da ekran görüntüsündeki yazıyı buraya yapıştır. Uygulamanın neleri bulduğunu
        hemen altta görürsün.
      </Text>

      <Text style={styles.label}>Hazır örnekler</Text>
      <View style={styles.chips}>
        {SAMPLES.map((sample) => (
          <Pressable
            key={sample.title}
            onPress={() => setText(sample.text)}
            style={({ pressed }) => [styles.chip, pressed && styles.chipPressed]}
          >
            <Text style={styles.chipText}>{sample.title}</Text>
          </Pressable>
        ))}
      </View>

      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Metni buraya yapıştır…"
        placeholderTextColor="#8A8F98"
        multiline
        textAlignVertical="top"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <View style={styles.inputFooter}>
        <Text style={styles.reference}>Ekran görüntüsü tarihi: bugün, {formatDate(reference)}</Text>
        {text.length > 0 && (
          <Pressable onPress={() => setText('')} hitSlop={8}>
            <Text style={styles.clear}>Temizle</Text>
          </Pressable>
        )}
      </View>

      {hasText && (
        <>
          <Section title="📅 Tarihler" count={dates.length}>
            {dates.length === 0 && <Text style={styles.empty}>Tarih bulunamadı.</Text>}
            {dates.map((m) => (
              <View key={`${m.index}-${m.length}`} style={styles.row}>
                <Text style={styles.rowValue}>{formatDate(m.date, m.time)}</Text>
                <Text style={styles.rowSource}>“{m.text}”</Text>
                {(m.yearInferred || m.relative) && (
                  <View style={styles.tags}>
                    {m.yearInferred && <Text style={styles.tag}>Yıl tahmin edildi</Text>}
                    {m.relative && <Text style={styles.tag}>Bugünün tarihine göre</Text>}
                  </View>
                )}
              </View>
            ))}
          </Section>

          <Section title="💸 Tutarlar" count={amounts.length}>
            {amounts.length === 0 && <Text style={styles.empty}>Tutar bulunamadı.</Text>}
            {amounts.map((m) => (
              <View key={`${m.index}-${m.length}`} style={styles.row}>
                <Text style={styles.rowValue}>{formatKurus(m.kurus)}</Text>
                <Text style={styles.rowSource}>“{m.text}”</Text>
              </View>
            ))}
          </Section>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🔎 Metinde bulunan yerler</Text>
            <Text style={styles.preview}>
              {pieces.map((piece, i) => (
                <Text
                  key={i}
                  style={
                    piece.kind === 'date'
                      ? styles.markDate
                      : piece.kind === 'amount'
                        ? styles.markAmount
                        : undefined
                  }
                >
                  {piece.text}
                </Text>
              ))}
            </Text>
          </View>
        </>
      )}

      <Text style={styles.footnote}>
        Şimdilik tarih, saat ve TL tutarları tanınıyor. Kupon, kargo, MHRS ve IBAN sıradaki adımda bu
        ekrana eklenecek.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#F4F5F7' },
  content: { padding: 16, paddingBottom: 48, gap: 12 },
  intro: { fontSize: 16, lineHeight: 22, color: '#1C1F24' },
  label: { fontSize: 13, fontWeight: '600', color: '#5B616B', textTransform: 'uppercase' },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDE0E5',
  },
  chipPressed: { backgroundColor: '#E8EAEE' },
  chipText: { fontSize: 15, color: '#1C1F24' },
  input: {
    minHeight: 140,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDE0E5',
    fontSize: 16,
    lineHeight: 22,
    color: '#1C1F24',
  },
  inputFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 12 },
  reference: { flex: 1, fontSize: 13, color: '#5B616B' },
  clear: { fontSize: 15, fontWeight: '600', color: '#2F6FEB' },
  section: { padding: 12, borderRadius: 12, backgroundColor: '#FFFFFF', gap: 10 },
  sectionTitle: { fontSize: 17, fontWeight: '700', color: '#1C1F24' },
  sectionCount: { fontWeight: '400', color: '#5B616B' },
  empty: { fontSize: 15, color: '#5B616B' },
  row: { gap: 2 },
  rowValue: { fontSize: 16, fontWeight: '600', color: '#1C1F24' },
  rowSource: { fontSize: 14, color: '#5B616B' },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 4 },
  tag: {
    fontSize: 12,
    color: '#7A4B00',
    backgroundColor: '#FFF1D6',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    overflow: 'hidden',
  },
  preview: { fontSize: 15, lineHeight: 22, color: '#1C1F24' },
  markDate: { backgroundColor: '#D9E8FF', color: '#0B3D91', fontWeight: '600' },
  markAmount: { backgroundColor: '#DDF5E3', color: '#14532D', fontWeight: '600' },
  footnote: { fontSize: 13, lineHeight: 18, color: '#5B616B', marginTop: 8 },
});
