{
  "code": "def generator():\n    yield \"Hello\"\n    yield \"World\"\n\ng = generator()\nprint g.next()\nprint g.next()", 
  "trace": [
    {
      "ordered_globals": [], 
      "stdout": "", 
      "func_name": "<module>", 
      "stack_to_render": [], 
      "globals": {}, 
      "heap": {}, 
      "line": 1, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "generator"
      ], 
      "stdout": "", 
      "func_name": "<module>", 
      "stack_to_render": [], 
      "globals": {
        "generator": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "generator()", 
          null
        ]
      }, 
      "line": 5, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "generator", 
        "g"
      ], 
      "stdout": "", 
      "func_name": "<module>", 
      "stack_to_render": [], 
      "globals": {
        "g": [
          "REF", 
          2
        ], 
        "generator": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "generator()", 
          null
        ], 
        "2": [
          "generator", 
          "<generator object generator at 0x1d72870>"
        ]
      }, 
      "line": 6, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "generator", 
        "g"
      ], 
      "stdout": "", 
      "func_name": "generator", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {}, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "generator", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "generator_f1", 
          "ordered_varnames": []
        }
      ], 
      "globals": {
        "g": [
          "REF", 
          2
        ], 
        "generator": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "generator()", 
          null
        ], 
        "2": [
          "generator", 
          "<generator object generator at 0x1d72870>"
        ]
      }, 
      "line": 1, 
      "event": "call"
    }, 
    {
      "ordered_globals": [
        "generator", 
        "g"
      ], 
      "stdout": "", 
      "func_name": "generator", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {}, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "generator", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "generator_f1", 
          "ordered_varnames": []
        }
      ], 
      "globals": {
        "g": [
          "REF", 
          2
        ], 
        "generator": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "generator()", 
          null
        ], 
        "2": [
          "generator", 
          "<generator object generator at 0x1d72870>"
        ]
      }, 
      "line": 2, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "generator", 
        "g"
      ], 
      "stdout": "", 
      "func_name": "generator", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "__return__": "Hello"
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "generator", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "generator_f1", 
          "ordered_varnames": [
            "__return__"
          ]
        }
      ], 
      "globals": {
        "g": [
          "REF", 
          2
        ], 
        "generator": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "generator()", 
          null
        ], 
        "2": [
          "generator", 
          "<generator object generator at 0x1d72870>"
        ]
      }, 
      "line": 2, 
      "event": "return"
    }, 
    {
      "ordered_globals": [
        "generator", 
        "g"
      ], 
      "stdout": "Hello\n", 
      "func_name": "<module>", 
      "stack_to_render": [], 
      "globals": {
        "g": [
          "REF", 
          2
        ], 
        "generator": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "generator()", 
          null
        ], 
        "2": [
          "generator", 
          "<generator object generator at 0x1d72870>"
        ]
      }, 
      "line": 7, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "generator", 
        "g"
      ], 
      "stdout": "Hello\n", 
      "func_name": "generator", 
      "stack_to_render": [
        {
          "frame_id": 2, 
          "encoded_locals": {}, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "generator", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "generator_f2", 
          "ordered_varnames": []
        }
      ], 
      "globals": {
        "g": [
          "REF", 
          2
        ], 
        "generator": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "generator()", 
          null
        ], 
        "2": [
          "generator", 
          "<generator object generator at 0x1d72870>"
        ]
      }, 
      "line": 2, 
      "event": "call"
    }, 
    {
      "ordered_globals": [
        "generator", 
        "g"
      ], 
      "stdout": "Hello\n", 
      "func_name": "generator", 
      "stack_to_render": [
        {
          "frame_id": 2, 
          "encoded_locals": {}, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "generator", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "generator_f2", 
          "ordered_varnames": []
        }
      ], 
      "globals": {
        "g": [
          "REF", 
          2
        ], 
        "generator": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "generator()", 
          null
        ], 
        "2": [
          "generator", 
          "<generator object generator at 0x1d72870>"
        ]
      }, 
      "line": 3, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "generator", 
        "g"
      ], 
      "stdout": "Hello\n", 
      "func_name": "generator", 
      "stack_to_render": [
        {
          "frame_id": 2, 
          "encoded_locals": {
            "__return__": "World"
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "generator", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "generator_f2", 
          "ordered_varnames": [
            "__return__"
          ]
        }
      ], 
      "globals": {
        "g": [
          "REF", 
          2
        ], 
        "generator": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "generator()", 
          null
        ], 
        "2": [
          "generator", 
          "<generator object generator at 0x1d72870>"
        ]
      }, 
      "line": 3, 
      "event": "return"
    }, 
    {
      "ordered_globals": [
        "generator", 
        "g"
      ], 
      "stdout": "Hello\nWorld\n", 
      "func_name": "<module>", 
      "stack_to_render": [], 
      "globals": {
        "generator": [
          "REF", 
          1
        ], 
        "g": [
          "REF", 
          2
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "generator()", 
          null
        ], 
        "2": [
          "generator", 
          "<generator object generator at 0x1d72870>"
        ]
      }, 
      "line": 7, 
      "event": "return"
    }
  ]
}
