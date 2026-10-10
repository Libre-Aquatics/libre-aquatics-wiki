import re, json, sys
src, out = sys.argv[1], sys.argv[2]
L = [l.expandtabs(8) for l in open(src, encoding='latin-1').read().split('\n')]
def section(start_pat, end_pat):
    i = next(k for k, l in enumerate(L) if re.search(start_pat, l))
    j = next(k for k in range(i + 1, len(L)) if re.search(end_pat, L[k]))
    return L[i + 1:j]
def two_col(lines, split_at):
    res, last = {}, [None, None]
    for l in lines:
        if 'SDIF VERSION' in l or 'April 28' in l or 'Code 004' in l or not l.strip(): continue
        for c, part in enumerate((l[:split_at], l[split_at:])):
            m = re.match(r'^\s*([A-Z0-9]{2,3})\s+(\S.*?)\s*$', part)
            if m:
                res[m.group(1)] = m.group(2); last[c] = m.group(1)
            elif part.strip() and last[c]:
                res[last[c]] += ' ' + part.strip().strip('()') if not part.strip().startswith('(') else ''
    return res
lsc = two_col(section(r'LSC Code 002 +Local', r'FILE Code 003 +File'), 42)
country = two_col(section(r'COUNTRY Code 004\s+FINA', r'MEET Code 005'), 42)
json.dump({'lsc': lsc, 'country': country}, open(out, 'w', encoding='utf-8'), indent=1, sort_keys=True, ensure_ascii=False)
print(len(lsc), 'LSC;', len(country), 'countries')
