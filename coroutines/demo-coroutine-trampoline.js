{
  "code": "def add(x,y):\n    yield x+y\n\ndef main():\n    r = yield add(2,2)\n    print r\n    yield\n\ndef run():\n    m = main()       \n    sub = m.send(None)             \n    result = sub.send(None)\n    m.send(result)\n\nrun()", 
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
        "add"
      ], 
      "stdout": "", 
      "func_name": "<module>", 
      "stack_to_render": [], 
      "globals": {
        "add": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "add(x, y)", 
          null
        ]
      }, 
      "line": 4, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "add", 
        "main"
      ], 
      "stdout": "", 
      "func_name": "<module>", 
      "stack_to_render": [], 
      "globals": {
        "add": [
          "REF", 
          1
        ], 
        "main": [
          "REF", 
          2
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "add(x, y)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "main()", 
          null
        ]
      }, 
      "line": 9, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "add", 
        "main", 
        "run"
      ], 
      "stdout": "", 
      "func_name": "<module>", 
      "stack_to_render": [], 
      "globals": {
        "add": [
          "REF", 
          1
        ], 
        "main": [
          "REF", 
          2
        ], 
        "run": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "add(x, y)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "main()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "run()", 
          null
        ]
      }, 
      "line": 15, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "add", 
        "main", 
        "run"
      ], 
      "stdout": "", 
      "func_name": "run", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {}, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "run", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "run_f1", 
          "ordered_varnames": []
        }
      ], 
      "globals": {
        "add": [
          "REF", 
          1
        ], 
        "main": [
          "REF", 
          2
        ], 
        "run": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "add(x, y)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "main()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "run()", 
          null
        ]
      }, 
      "line": 9, 
      "event": "call"
    }, 
    {
      "ordered_globals": [
        "add", 
        "main", 
        "run"
      ], 
      "stdout": "", 
      "func_name": "run", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {}, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "run", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "run_f1", 
          "ordered_varnames": []
        }
      ], 
      "globals": {
        "add": [
          "REF", 
          1
        ], 
        "main": [
          "REF", 
          2
        ], 
        "run": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "add(x, y)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "main()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "run()", 
          null
        ]
      }, 
      "line": 10, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "add", 
        "main", 
        "run"
      ], 
      "stdout": "", 
      "func_name": "run", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "m": [
              "REF", 
              4
            ]
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "run", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "run_f1", 
          "ordered_varnames": [
            "m"
          ]
        }
      ], 
      "globals": {
        "add": [
          "REF", 
          1
        ], 
        "main": [
          "REF", 
          2
        ], 
        "run": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "add(x, y)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "main()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "run()", 
          null
        ], 
        "4": [
          "generator", 
          "<generator object main at 0x24a1870>"
        ]
      }, 
      "line": 11, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "add", 
        "main", 
        "run"
      ], 
      "stdout": "", 
      "func_name": "main", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "m": [
              "REF", 
              4
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": false, 
          "func_name": "run", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "run_f1", 
          "ordered_varnames": [
            "m"
          ]
        }, 
        {
          "frame_id": 2, 
          "encoded_locals": {}, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "main", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "main_f2", 
          "ordered_varnames": []
        }
      ], 
      "globals": {
        "add": [
          "REF", 
          1
        ], 
        "main": [
          "REF", 
          2
        ], 
        "run": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "add(x, y)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "main()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "run()", 
          null
        ], 
        "4": [
          "generator", 
          "<generator object main at 0x24a1870>"
        ]
      }, 
      "line": 4, 
      "event": "call"
    }, 
    {
      "ordered_globals": [
        "add", 
        "main", 
        "run"
      ], 
      "stdout": "", 
      "func_name": "main", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "m": [
              "REF", 
              4
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": false, 
          "func_name": "run", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "run_f1", 
          "ordered_varnames": [
            "m"
          ]
        }, 
        {
          "frame_id": 2, 
          "encoded_locals": {}, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "main", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "main_f2", 
          "ordered_varnames": []
        }
      ], 
      "globals": {
        "add": [
          "REF", 
          1
        ], 
        "main": [
          "REF", 
          2
        ], 
        "run": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "add(x, y)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "main()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "run()", 
          null
        ], 
        "4": [
          "generator", 
          "<generator object main at 0x24a1870>"
        ]
      }, 
      "line": 5, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "add", 
        "main", 
        "run"
      ], 
      "stdout": "", 
      "func_name": "main", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "m": [
              "REF", 
              4
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": false, 
          "func_name": "run", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "run_f1", 
          "ordered_varnames": [
            "m"
          ]
        }, 
        {
          "frame_id": 2, 
          "encoded_locals": {
            "__return__": [
              "REF", 
              5
            ]
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "main", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "main_f2", 
          "ordered_varnames": [
            "__return__"
          ]
        }
      ], 
      "globals": {
        "add": [
          "REF", 
          1
        ], 
        "main": [
          "REF", 
          2
        ], 
        "run": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "add(x, y)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "main()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "run()", 
          null
        ], 
        "4": [
          "generator", 
          "<generator object main at 0x24a1870>"
        ], 
        "5": [
          "generator", 
          "<generator object add at 0x24f50a0>"
        ]
      }, 
      "line": 5, 
      "event": "return"
    }, 
    {
      "ordered_globals": [
        "add", 
        "main", 
        "run"
      ], 
      "stdout": "", 
      "func_name": "run", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "m": [
              "REF", 
              4
            ], 
            "sub": [
              "REF", 
              5
            ]
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "run", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "run_f1", 
          "ordered_varnames": [
            "m", 
            "sub"
          ]
        }
      ], 
      "globals": {
        "add": [
          "REF", 
          1
        ], 
        "main": [
          "REF", 
          2
        ], 
        "run": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "add(x, y)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "main()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "run()", 
          null
        ], 
        "4": [
          "generator", 
          "<generator object main at 0x24a1870>"
        ], 
        "5": [
          "generator", 
          "<generator object add at 0x24f50a0>"
        ]
      }, 
      "line": 12, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "add", 
        "main", 
        "run"
      ], 
      "stdout": "", 
      "func_name": "add", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "m": [
              "REF", 
              4
            ], 
            "sub": [
              "REF", 
              5
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": false, 
          "func_name": "run", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "run_f1", 
          "ordered_varnames": [
            "m", 
            "sub"
          ]
        }, 
        {
          "frame_id": 3, 
          "encoded_locals": {
            "y": 2, 
            "x": 2
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "add", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "add_f3", 
          "ordered_varnames": [
            "x", 
            "y"
          ]
        }
      ], 
      "globals": {
        "add": [
          "REF", 
          1
        ], 
        "main": [
          "REF", 
          2
        ], 
        "run": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "add(x, y)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "main()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "run()", 
          null
        ], 
        "4": [
          "generator", 
          "<generator object main at 0x24a1870>"
        ], 
        "5": [
          "generator", 
          "<generator object add at 0x24f50a0>"
        ]
      }, 
      "line": 1, 
      "event": "call"
    }, 
    {
      "ordered_globals": [
        "add", 
        "main", 
        "run"
      ], 
      "stdout": "", 
      "func_name": "add", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "m": [
              "REF", 
              4
            ], 
            "sub": [
              "REF", 
              5
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": false, 
          "func_name": "run", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "run_f1", 
          "ordered_varnames": [
            "m", 
            "sub"
          ]
        }, 
        {
          "frame_id": 3, 
          "encoded_locals": {
            "y": 2, 
            "x": 2
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "add", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "add_f3", 
          "ordered_varnames": [
            "x", 
            "y"
          ]
        }
      ], 
      "globals": {
        "add": [
          "REF", 
          1
        ], 
        "main": [
          "REF", 
          2
        ], 
        "run": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "add(x, y)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "main()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "run()", 
          null
        ], 
        "4": [
          "generator", 
          "<generator object main at 0x24a1870>"
        ], 
        "5": [
          "generator", 
          "<generator object add at 0x24f50a0>"
        ]
      }, 
      "line": 2, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "add", 
        "main", 
        "run"
      ], 
      "stdout": "", 
      "func_name": "add", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "m": [
              "REF", 
              4
            ], 
            "sub": [
              "REF", 
              5
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": false, 
          "func_name": "run", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "run_f1", 
          "ordered_varnames": [
            "m", 
            "sub"
          ]
        }, 
        {
          "frame_id": 3, 
          "encoded_locals": {
            "y": 2, 
            "x": 2, 
            "__return__": 4
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "add", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "add_f3", 
          "ordered_varnames": [
            "x", 
            "y", 
            "__return__"
          ]
        }
      ], 
      "globals": {
        "add": [
          "REF", 
          1
        ], 
        "main": [
          "REF", 
          2
        ], 
        "run": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "add(x, y)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "main()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "run()", 
          null
        ], 
        "4": [
          "generator", 
          "<generator object main at 0x24a1870>"
        ], 
        "5": [
          "generator", 
          "<generator object add at 0x24f50a0>"
        ]
      }, 
      "line": 2, 
      "event": "return"
    }, 
    {
      "ordered_globals": [
        "add", 
        "main", 
        "run"
      ], 
      "stdout": "", 
      "func_name": "run", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "m": [
              "REF", 
              4
            ], 
            "sub": [
              "REF", 
              5
            ], 
            "result": 4
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "run", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "run_f1", 
          "ordered_varnames": [
            "m", 
            "sub", 
            "result"
          ]
        }
      ], 
      "globals": {
        "add": [
          "REF", 
          1
        ], 
        "main": [
          "REF", 
          2
        ], 
        "run": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "add(x, y)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "main()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "run()", 
          null
        ], 
        "4": [
          "generator", 
          "<generator object main at 0x24a1870>"
        ], 
        "5": [
          "generator", 
          "<generator object add at 0x24f50a0>"
        ]
      }, 
      "line": 13, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "add", 
        "main", 
        "run"
      ], 
      "stdout": "", 
      "func_name": "main", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "m": [
              "REF", 
              4
            ], 
            "sub": [
              "REF", 
              5
            ], 
            "result": 4
          }, 
          "is_highlighted": false, 
          "is_parent": false, 
          "func_name": "run", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "run_f1", 
          "ordered_varnames": [
            "m", 
            "sub", 
            "result"
          ]
        }, 
        {
          "frame_id": 4, 
          "encoded_locals": {}, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "main", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "main_f4", 
          "ordered_varnames": []
        }
      ], 
      "globals": {
        "add": [
          "REF", 
          1
        ], 
        "main": [
          "REF", 
          2
        ], 
        "run": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "add(x, y)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "main()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "run()", 
          null
        ], 
        "4": [
          "generator", 
          "<generator object main at 0x24a1870>"
        ], 
        "5": [
          "generator", 
          "<generator object add at 0x24f50a0>"
        ]
      }, 
      "line": 5, 
      "event": "call"
    }, 
    {
      "ordered_globals": [
        "add", 
        "main", 
        "run"
      ], 
      "stdout": "", 
      "func_name": "main", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "m": [
              "REF", 
              4
            ], 
            "sub": [
              "REF", 
              5
            ], 
            "result": 4
          }, 
          "is_highlighted": false, 
          "is_parent": false, 
          "func_name": "run", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "run_f1", 
          "ordered_varnames": [
            "m", 
            "sub", 
            "result"
          ]
        }, 
        {
          "frame_id": 4, 
          "encoded_locals": {
            "r": 4
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "main", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "main_f4", 
          "ordered_varnames": [
            "r"
          ]
        }
      ], 
      "globals": {
        "add": [
          "REF", 
          1
        ], 
        "main": [
          "REF", 
          2
        ], 
        "run": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "add(x, y)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "main()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "run()", 
          null
        ], 
        "4": [
          "generator", 
          "<generator object main at 0x24a1870>"
        ], 
        "5": [
          "generator", 
          "<generator object add at 0x24f50a0>"
        ]
      }, 
      "line": 6, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "add", 
        "main", 
        "run"
      ], 
      "stdout": "4\n", 
      "func_name": "main", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "m": [
              "REF", 
              4
            ], 
            "sub": [
              "REF", 
              5
            ], 
            "result": 4
          }, 
          "is_highlighted": false, 
          "is_parent": false, 
          "func_name": "run", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "run_f1", 
          "ordered_varnames": [
            "m", 
            "sub", 
            "result"
          ]
        }, 
        {
          "frame_id": 4, 
          "encoded_locals": {
            "r": 4
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "main", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "main_f4", 
          "ordered_varnames": [
            "r"
          ]
        }
      ], 
      "globals": {
        "add": [
          "REF", 
          1
        ], 
        "main": [
          "REF", 
          2
        ], 
        "run": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "add(x, y)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "main()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "run()", 
          null
        ], 
        "4": [
          "generator", 
          "<generator object main at 0x24a1870>"
        ], 
        "5": [
          "generator", 
          "<generator object add at 0x24f50a0>"
        ]
      }, 
      "line": 7, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "add", 
        "main", 
        "run"
      ], 
      "stdout": "4\n", 
      "func_name": "main", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "m": [
              "REF", 
              4
            ], 
            "sub": [
              "REF", 
              5
            ], 
            "result": 4
          }, 
          "is_highlighted": false, 
          "is_parent": false, 
          "func_name": "run", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "run_f1", 
          "ordered_varnames": [
            "m", 
            "sub", 
            "result"
          ]
        }, 
        {
          "frame_id": 4, 
          "encoded_locals": {
            "__return__": null, 
            "r": 4
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "main", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "main_f4", 
          "ordered_varnames": [
            "r", 
            "__return__"
          ]
        }
      ], 
      "globals": {
        "add": [
          "REF", 
          1
        ], 
        "main": [
          "REF", 
          2
        ], 
        "run": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "add(x, y)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "main()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "run()", 
          null
        ], 
        "4": [
          "generator", 
          "<generator object main at 0x24a1870>"
        ], 
        "5": [
          "generator", 
          "<generator object add at 0x24f50a0>"
        ]
      }, 
      "line": 7, 
      "event": "return"
    }, 
    {
      "ordered_globals": [
        "add", 
        "main", 
        "run"
      ], 
      "stdout": "4\n", 
      "func_name": "run", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "__return__": null, 
            "m": [
              "REF", 
              4
            ], 
            "sub": [
              "REF", 
              5
            ], 
            "result": 4
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "run", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "run_f1", 
          "ordered_varnames": [
            "m", 
            "sub", 
            "result", 
            "__return__"
          ]
        }
      ], 
      "globals": {
        "add": [
          "REF", 
          1
        ], 
        "main": [
          "REF", 
          2
        ], 
        "run": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "add(x, y)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "main()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "run()", 
          null
        ], 
        "4": [
          "generator", 
          "<generator object main at 0x24a1870>"
        ], 
        "5": [
          "generator", 
          "<generator object add at 0x24f50a0>"
        ]
      }, 
      "line": 13, 
      "event": "return"
    }, 
    {
      "ordered_globals": [
        "add", 
        "main", 
        "run"
      ], 
      "stdout": "4\n", 
      "func_name": "<module>", 
      "stack_to_render": [], 
      "globals": {
        "add": [
          "REF", 
          1
        ], 
        "main": [
          "REF", 
          2
        ], 
        "run": [
          "REF", 
          3
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "add(x, y)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "main()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "run()", 
          null
        ]
      }, 
      "line": 15, 
      "event": "return"
    }
  ]
}
