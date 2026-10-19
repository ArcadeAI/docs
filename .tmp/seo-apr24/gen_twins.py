#!/usr/bin/env python3
"""
Generate locale-less twin redirect rules for next.config.ts.
For each rule with source: '/:locale/...', generate a sibling with:
  - source: '/...' (no locale)
  - destination: '/en/...' (hardcoded)
"""
import re
import sys

with open('/Users/teal/workspace/arcade/docs/next.config.ts', 'r') as f:
    content = f.read()

# Find the redirects() return array
# Extract all redirect objects
redirect_pattern = re.compile(
    r'\{[^{}]*source:\s*"([^"]+)"[^{}]*destination:\s*"([^"]+)"[^{}]*permanent:\s*(true|false)[^{}]*\}',
    re.DOTALL
)

matches = list(redirect_pattern.finditer(content))
print(f"Found {len(matches)} redirect rules", file=sys.stderr)

twins = []
for m in matches:
    source = m.group(1)
    destination = m.group(2)
    permanent = m.group(3)
    
    # Only process sources that start with /:locale/ (not constrained locales)
    if source.startswith('/:locale/'):
        # Create locale-less version
        locale_less_source = source[len('/:locale'):]  # e.g. /home/auth/...
        
        # Create destination with /en/ instead of /:locale/
        if destination.startswith('/:locale/'):
            locale_less_dest = '/en/' + destination[len('/:locale/'):]
        else:
            # Skip if destination doesn't follow expected pattern
            continue
        
        twins.append({
            'source': locale_less_source,
            'destination': locale_less_dest,
            'permanent': permanent,
            'original_source': source,
        })

print(f"Generated {len(twins)} twin rules", file=sys.stderr)
for t in twins:
    print(f"  {t['original_source']}  ->  twin: {t['source']}  =>  {t['destination']}")

