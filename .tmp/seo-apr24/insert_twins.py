#!/usr/bin/env python3
"""
Insert locale-less twin redirect rules before each locale-prefixed rule in next.config.ts.
"""
import re

CONFIG_PATH = '/Users/teal/workspace/arcade/docs/next.config.ts'

with open(CONFIG_PATH, 'r') as f:
    content = f.read()

# We'll process line by line to find each redirect object block and insert twins before it
# Pattern: find each { source: "/:locale/...", ... } block and insert twin before it

# Strategy: split on individual redirect object boundaries
# Each redirect is:
#        {
#          source: "...",
#          destination: "...",
#          permanent: true/false,
#        },
# We need to find each block that has source starting with /:locale/

# Let's use a more careful approach - find the start of each redirect object
# and insert a twin before it

lines = content.split('\n')
output_lines = []
i = 0

# Track which locale-constrained patterns we're inside (for the comment blocks)
in_locale_constrained = False

while i < len(lines):
    line = lines[i]
    
    # Check if this line starts a redirect object with /:locale/ source
    # Look for: source: "/:locale/..."
    source_match = re.search(r'source:\s*"(/:locale/[^"]+)"', line)
    
    if source_match:
        # Find the full block - look backwards to find the opening brace of this object
        # and forwards to find the closing brace
        source_val = source_match.group(1)
        
        # Find destination on following lines
        dest_val = None
        permanent_val = None
        
        # Look ahead up to 5 lines for destination and permanent
        for j in range(i, min(i+8, len(lines))):
            dest_match = re.search(r'destination:\s*"(/:locale/[^"]+)"', lines[j])
            perm_match = re.search(r'permanent:\s*(true|false)', lines[j])
            if dest_match:
                dest_val = dest_match.group(1)
            if perm_match:
                permanent_val = perm_match.group(1)
        
        if dest_val and permanent_val:
            # Generate twin
            locale_less_source = source_val[len('/:locale'):]
            locale_less_dest = '/en/' + dest_val[len('/:locale/'):]
            
            # Find indentation of the current block opening (look back for the {)
            indent = '        '  # default 8 spaces
            # Look for the { that opens this block
            for back in range(max(0, i-3), i+1):
                brace_match = re.match(r'^(\s*)\{', lines[back])
                if brace_match:
                    indent = brace_match.group(1)
                    break
            
            # Insert twin before the current opening brace
            # Find where the brace is (look back)
            # We'll insert the twin just before the line with the opening brace of this block
            output_lines.append(line)
        else:
            output_lines.append(line)
        i += 1
        continue
    
    output_lines.append(line)
    i += 1

print("Analysis only - checking pattern match")
print(f"Total lines: {len(lines)}")
print(f"Output lines: {len(output_lines)}")

