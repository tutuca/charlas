{
  "code": "def cosubroutine():\n    x,y = (yield) # !!\n    result = x + y\n    yield result\n\nargs = (1,2)\n\nsub = cosubroutine()\nsub.next()              # start the coroutine\nresult = sub.send(args) # send the values into it\nprint(result)", 
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
        "cosubroutine"
      ], 
      "stdout": "", 
      "func_name": "<module>", 
      "stack_to_render": [], 
      "globals": {
        "cosubroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ]
      }, 
      "line": 6, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "cosubroutine", 
        "args"
      ], 
      "stdout": "", 
      "func_name": "<module>", 
      "stack_to_render": [], 
      "globals": {
        "args": [
          "REF", 
          2
        ], 
        "cosubroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "2": [
          "TUPLE", 
          1, 
          2
        ]
      }, 
      "line": 8, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "cosubroutine", 
        "args", 
        "sub"
      ], 
      "stdout": "", 
      "func_name": "<module>", 
      "stack_to_render": [], 
      "globals": {
        "args": [
          "REF", 
          2
        ], 
        "cosubroutine": [
          "REF", 
          1
        ], 
        "sub": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "2": [
          "TUPLE", 
          1, 
          2
        ], 
        "3": [
          "generator", 
          "<generator object cosubroutine at 0x200a870>"
        ]
      }, 
      "line": 9, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "cosubroutine", 
        "args", 
        "sub"
      ], 
      "stdout": "", 
      "func_name": "cosubroutine", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {}, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "cosubroutine", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "cosubroutine_f1", 
          "ordered_varnames": []
        }
      ], 
      "globals": {
        "args": [
          "REF", 
          2
        ], 
        "cosubroutine": [
          "REF", 
          1
        ], 
        "sub": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "2": [
          "TUPLE", 
          1, 
          2
        ], 
        "3": [
          "generator", 
          "<generator object cosubroutine at 0x200a870>"
        ]
      }, 
      "line": 1, 
      "event": "call"
    }, 
    {
      "ordered_globals": [
        "cosubroutine", 
        "args", 
        "sub"
      ], 
      "stdout": "", 
      "func_name": "cosubroutine", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {}, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "cosubroutine", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "cosubroutine_f1", 
          "ordered_varnames": []
        }
      ], 
      "globals": {
        "args": [
          "REF", 
          2
        ], 
        "cosubroutine": [
          "REF", 
          1
        ], 
        "sub": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "2": [
          "TUPLE", 
          1, 
          2
        ], 
        "3": [
          "generator", 
          "<generator object cosubroutine at 0x200a870>"
        ]
      }, 
      "line": 2, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "cosubroutine", 
        "args", 
        "sub"
      ], 
      "stdout": "", 
      "func_name": "cosubroutine", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "__return__": null
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "cosubroutine", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "cosubroutine_f1", 
          "ordered_varnames": [
            "__return__"
          ]
        }
      ], 
      "globals": {
        "args": [
          "REF", 
          2
        ], 
        "cosubroutine": [
          "REF", 
          1
        ], 
        "sub": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "2": [
          "TUPLE", 
          1, 
          2
        ], 
        "3": [
          "generator", 
          "<generator object cosubroutine at 0x200a870>"
        ]
      }, 
      "line": 2, 
      "event": "return"
    }, 
    {
      "ordered_globals": [
        "cosubroutine", 
        "args", 
        "sub"
      ], 
      "stdout": "", 
      "func_name": "<module>", 
      "stack_to_render": [], 
      "globals": {
        "args": [
          "REF", 
          2
        ], 
        "cosubroutine": [
          "REF", 
          1
        ], 
        "sub": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "2": [
          "TUPLE", 
          1, 
          2
        ], 
        "3": [
          "generator", 
          "<generator object cosubroutine at 0x200a870>"
        ]
      }, 
      "line": 10, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "cosubroutine", 
        "args", 
        "sub"
      ], 
      "stdout": "", 
      "func_name": "cosubroutine", 
      "stack_to_render": [
        {
          "frame_id": 2, 
          "encoded_locals": {}, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "cosubroutine", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "cosubroutine_f2", 
          "ordered_varnames": []
        }
      ], 
      "globals": {
        "args": [
          "REF", 
          2
        ], 
        "cosubroutine": [
          "REF", 
          1
        ], 
        "sub": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "2": [
          "TUPLE", 
          1, 
          2
        ], 
        "3": [
          "generator", 
          "<generator object cosubroutine at 0x200a870>"
        ]
      }, 
      "line": 2, 
      "event": "call"
    }, 
    {
      "ordered_globals": [
        "cosubroutine", 
        "args", 
        "sub"
      ], 
      "stdout": "", 
      "func_name": "cosubroutine", 
      "stack_to_render": [
        {
          "frame_id": 2, 
          "encoded_locals": {
            "y": 2, 
            "x": 1
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "cosubroutine", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "cosubroutine_f2", 
          "ordered_varnames": [
            "x", 
            "y"
          ]
        }
      ], 
      "globals": {
        "args": [
          "REF", 
          2
        ], 
        "cosubroutine": [
          "REF", 
          1
        ], 
        "sub": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "2": [
          "TUPLE", 
          1, 
          2
        ], 
        "3": [
          "generator", 
          "<generator object cosubroutine at 0x200a870>"
        ]
      }, 
      "line": 3, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "cosubroutine", 
        "args", 
        "sub"
      ], 
      "stdout": "", 
      "func_name": "cosubroutine", 
      "stack_to_render": [
        {
          "frame_id": 2, 
          "encoded_locals": {
            "y": 2, 
            "x": 1, 
            "result": 3
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "cosubroutine", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "cosubroutine_f2", 
          "ordered_varnames": [
            "x", 
            "y", 
            "result"
          ]
        }
      ], 
      "globals": {
        "args": [
          "REF", 
          2
        ], 
        "cosubroutine": [
          "REF", 
          1
        ], 
        "sub": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "2": [
          "TUPLE", 
          1, 
          2
        ], 
        "3": [
          "generator", 
          "<generator object cosubroutine at 0x200a870>"
        ]
      }, 
      "line": 4, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "cosubroutine", 
        "args", 
        "sub"
      ], 
      "stdout": "", 
      "func_name": "cosubroutine", 
      "stack_to_render": [
        {
          "frame_id": 2, 
          "encoded_locals": {
            "y": 2, 
            "x": 1, 
            "__return__": 3, 
            "result": 3
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "cosubroutine", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "cosubroutine_f2", 
          "ordered_varnames": [
            "x", 
            "y", 
            "result", 
            "__return__"
          ]
        }
      ], 
      "globals": {
        "args": [
          "REF", 
          2
        ], 
        "cosubroutine": [
          "REF", 
          1
        ], 
        "sub": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "2": [
          "TUPLE", 
          1, 
          2
        ], 
        "3": [
          "generator", 
          "<generator object cosubroutine at 0x200a870>"
        ]
      }, 
      "line": 4, 
      "event": "return"
    }, 
    {
      "ordered_globals": [
        "cosubroutine", 
        "args", 
        "sub", 
        "result"
      ], 
      "stdout": "", 
      "func_name": "<module>", 
      "stack_to_render": [], 
      "globals": {
        "args": [
          "REF", 
          2
        ], 
        "cosubroutine": [
          "REF", 
          1
        ], 
        "sub": [
          "REF", 
          3
        ], 
        "result": 3
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "2": [
          "TUPLE", 
          1, 
          2
        ], 
        "3": [
          "generator", 
          "<generator object cosubroutine at 0x200a870>"
        ]
      }, 
      "line": 11, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "cosubroutine", 
        "args", 
        "sub", 
        "result"
      ], 
      "stdout": "3\n", 
      "func_name": "<module>", 
      "stack_to_render": [], 
      "globals": {
        "args": [
          "REF", 
          2
        ], 
        "cosubroutine": [
          "REF", 
          1
        ], 
        "sub": [
          "REF", 
          3
        ], 
        "result": 3
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "2": [
          "TUPLE", 
          1, 
          2
        ], 
        "3": [
          "generator", 
          "<generator object cosubroutine at 0x200a870>"
        ]
      }, 
      "line": 11, 
      "event": "return"
    }
  ]
}
