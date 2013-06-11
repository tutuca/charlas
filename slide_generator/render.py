#!/usr/bin/env python

import codecs
import jinja2
import markdown
import shutil
import errno
import sys
import glob
import os
import SimpleHTTPServer
import SocketServer


PORT = 8000
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
            html = markdown.markdown(content_section, extensions=['codehilite'])
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

def pack_slides():
    cwd = os.getcwd()
    try:
        shutil.copytree(os.path.join(BASE_DIR, "js"), os.path.join(cwd,"js"))
        shutil.copytree(os.path.join(BASE_DIR, "theme", "css"), os.path.join(cwd, "theme", "css"))
        shutil.copytree(os.path.join(BASE_DIR, "theme", "img"), os.path.join(cwd, "theme", "img"))
    except OSError as exc:
        if exc.errno == errno.EEXIST:
            pass

def main():
    sf = "slides.md"
    if len(sys.argv) == 2:
        sf = sys.argv[1]
    else:
        sf = glob.glob("*.md").pop()
    process_slides(sf)
    pack_slides()


def serve():
    Handler = SimpleHTTPServer.SimpleHTTPRequestHandler
    httpd = SocketServer.TCPServer(("", PORT), Handler)
    print "Serving at port", PORT
    httpd.serve_forever()

if __name__ == '__main__':
    main()
    