#!/usr/bin/env python

import codecs
import jinja2
import markdown
import sys
import os


BASE_DIR = os.path.dirname(os.path.abspath(__file__))


def process_slides(slides_file):

    with codecs.open(slides_file.replace(".md", ".html"), 'w', encoding='utf8') as outfile:
        md = codecs.open(slides_file, encoding='utf8').read()
        md_slides = md.split('\n---\n')
        print 'Compiled %s slides.' % len(md_slides)

        slides = []
        # Process each slide separately.
        for md_slide in md_slides:
            slide = {}
            sections = md_slide.split('\n\n')
            # Extract metadata at the beginning of the slide (look for key: value)
            # pairs.
            metadata_section = sections[0]
            metadata = parse_metadata(metadata_section)
            slide.update(metadata)
            remainder_index = metadata and 1 or 0
            # Get the content from the rest of the slide.
            content_section = '\n\n'.join(sections[remainder_index:])
            html = markdown.markdown(content_section)
            slide['content'] = postprocess_html(html, metadata)
            slides.append(slide)

        layout = os.path.join(BASE_DIR, "theme", "templates", "layout.html")
        template = jinja2.Template(open(layout).read())
        outfile.write(template.render(slides=slides))


def parse_metadata(section):
    """Given the first part of a slide, returns metadata associated with it."""
    metadata = {}
    metadata_lines = section.split('\n')
    for line in metadata_lines:
        colon_index = line.find(':')
        if colon_index != -1:
            key = line[:colon_index].strip()
            val = line[colon_index + 1:].strip()
            metadata[key] = val

    return metadata


def postprocess_html(html, metadata):
    """Returns processed HTML to fit into the slide template format."""
    if metadata.get('build_lists') and metadata['build_lists'] == 'true':
        html = html.replace('<ul>', '<ul class="build">')
        html = html.replace('<ol>', '<ol class="build">')
    return html

if __name__ == '__main__':
    sf = sys.argv[1] if len(sys.argv) == 2 else "slides.md"
    process_slides(sf)
