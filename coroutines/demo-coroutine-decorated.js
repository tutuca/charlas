{
  "code": "def coroutine(f):\n    def start(*args,**kwargs):\n        co = f(*args,**kwargs)\n        co.next()\n        return co\n    return start\n\n@coroutine\ndef cosubroutine():\n    x,y = (yield)\n    result = x + y\n    yield result\n\nsub = cosubroutine()\nprint( sub.send((1,2)) )", 
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
        "coroutine"
      ], 
      "stdout": "", 
      "func_name": "<module>", 
      "stack_to_render": [], 
      "globals": {
        "coroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "coroutine(f)", 
          null
        ]
      }, 
      "line": 8, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "coroutine"
      ], 
      "stdout": "", 
      "func_name": "coroutine", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "f": [
              "REF", 
              2
            ]
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "coroutine", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "coroutine_f1", 
          "ordered_varnames": [
            "f"
          ]
        }
      ], 
      "globals": {
        "coroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "coroutine(f)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ]
      }, 
      "line": 1, 
      "event": "call"
    }, 
    {
      "ordered_globals": [
        "coroutine"
      ], 
      "stdout": "", 
      "func_name": "coroutine", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "f": [
              "REF", 
              2
            ]
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "coroutine", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "coroutine_f1", 
          "ordered_varnames": [
            "f"
          ]
        }
      ], 
      "globals": {
        "coroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "coroutine(f)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ]
      }, 
      "line": 2, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "coroutine"
      ], 
      "stdout": "", 
      "func_name": "coroutine", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "start": [
              "REF", 
              3
            ], 
            "f": [
              "REF", 
              2
            ]
          }, 
          "is_highlighted": true, 
          "is_parent": true, 
          "func_name": "coroutine", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "coroutine_f1_p", 
          "ordered_varnames": [
            "f", 
            "start"
          ]
        }
      ], 
      "globals": {
        "coroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "coroutine(f)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "start(*args, **kwargs)", 
          1
        ]
      }, 
      "line": 6, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "coroutine"
      ], 
      "stdout": "", 
      "func_name": "coroutine", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "__return__": [
              "REF", 
              3
            ], 
            "start": [
              "REF", 
              3
            ], 
            "f": [
              "REF", 
              2
            ]
          }, 
          "is_highlighted": true, 
          "is_parent": true, 
          "func_name": "coroutine", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "coroutine_f1_p", 
          "ordered_varnames": [
            "f", 
            "start", 
            "__return__"
          ]
        }
      ], 
      "globals": {
        "coroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "coroutine(f)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "start(*args, **kwargs)", 
          1
        ]
      }, 
      "line": 6, 
      "event": "return"
    }, 
    {
      "ordered_globals": [
        "coroutine", 
        "cosubroutine"
      ], 
      "stdout": "", 
      "func_name": "<module>", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "__return__": [
              "REF", 
              3
            ], 
            "start": [
              "REF", 
              3
            ], 
            "f": [
              "REF", 
              2
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": true, 
          "func_name": "coroutine", 
          "is_zombie": true, 
          "parent_frame_id_list": [], 
          "unique_hash": "coroutine_f1_p_z", 
          "ordered_varnames": [
            "f", 
            "start", 
            "__return__"
          ]
        }
      ], 
      "globals": {
        "cosubroutine": [
          "REF", 
          3
        ], 
        "coroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "coroutine(f)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "start(*args, **kwargs)", 
          1
        ]
      }, 
      "line": 14, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "coroutine", 
        "cosubroutine"
      ], 
      "stdout": "", 
      "func_name": "start", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "__return__": [
              "REF", 
              3
            ], 
            "start": [
              "REF", 
              3
            ], 
            "f": [
              "REF", 
              2
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": true, 
          "func_name": "coroutine", 
          "is_zombie": true, 
          "parent_frame_id_list": [], 
          "unique_hash": "coroutine_f1_p_z", 
          "ordered_varnames": [
            "f", 
            "start", 
            "__return__"
          ]
        }, 
        {
          "frame_id": 2, 
          "encoded_locals": {
            "args": [
              "REF", 
              5
            ], 
            "kwargs": [
              "REF", 
              4
            ]
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "start", 
          "is_zombie": false, 
          "parent_frame_id_list": [
            1
          ], 
          "unique_hash": "start_f2", 
          "ordered_varnames": [
            "args", 
            "kwargs"
          ]
        }
      ], 
      "globals": {
        "cosubroutine": [
          "REF", 
          3
        ], 
        "coroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "coroutine(f)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "start(*args, **kwargs)", 
          1
        ], 
        "4": [
          "DICT"
        ], 
        "5": [
          "TUPLE"
        ]
      }, 
      "line": 2, 
      "event": "call"
    }, 
    {
      "ordered_globals": [
        "coroutine", 
        "cosubroutine"
      ], 
      "stdout": "", 
      "func_name": "start", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "__return__": [
              "REF", 
              3
            ], 
            "start": [
              "REF", 
              3
            ], 
            "f": [
              "REF", 
              2
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": true, 
          "func_name": "coroutine", 
          "is_zombie": true, 
          "parent_frame_id_list": [], 
          "unique_hash": "coroutine_f1_p_z", 
          "ordered_varnames": [
            "f", 
            "start", 
            "__return__"
          ]
        }, 
        {
          "frame_id": 2, 
          "encoded_locals": {
            "args": [
              "REF", 
              5
            ], 
            "kwargs": [
              "REF", 
              4
            ]
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "start", 
          "is_zombie": false, 
          "parent_frame_id_list": [
            1
          ], 
          "unique_hash": "start_f2", 
          "ordered_varnames": [
            "args", 
            "kwargs"
          ]
        }
      ], 
      "globals": {
        "cosubroutine": [
          "REF", 
          3
        ], 
        "coroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "coroutine(f)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "start(*args, **kwargs)", 
          1
        ], 
        "4": [
          "DICT"
        ], 
        "5": [
          "TUPLE"
        ]
      }, 
      "line": 3, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "coroutine", 
        "cosubroutine"
      ], 
      "stdout": "", 
      "func_name": "start", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "__return__": [
              "REF", 
              3
            ], 
            "start": [
              "REF", 
              3
            ], 
            "f": [
              "REF", 
              2
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": true, 
          "func_name": "coroutine", 
          "is_zombie": true, 
          "parent_frame_id_list": [], 
          "unique_hash": "coroutine_f1_p_z", 
          "ordered_varnames": [
            "f", 
            "start", 
            "__return__"
          ]
        }, 
        {
          "frame_id": 2, 
          "encoded_locals": {
            "args": [
              "REF", 
              5
            ], 
            "co": [
              "REF", 
              6
            ], 
            "kwargs": [
              "REF", 
              4
            ]
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "start", 
          "is_zombie": false, 
          "parent_frame_id_list": [
            1
          ], 
          "unique_hash": "start_f2", 
          "ordered_varnames": [
            "args", 
            "kwargs", 
            "co"
          ]
        }
      ], 
      "globals": {
        "cosubroutine": [
          "REF", 
          3
        ], 
        "coroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "coroutine(f)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "start(*args, **kwargs)", 
          1
        ], 
        "4": [
          "DICT"
        ], 
        "5": [
          "TUPLE"
        ], 
        "6": [
          "generator", 
          "<generator object cosubroutine at 0x242f870>"
        ]
      }, 
      "line": 4, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "coroutine", 
        "cosubroutine"
      ], 
      "stdout": "", 
      "func_name": "cosubroutine", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "__return__": [
              "REF", 
              3
            ], 
            "start": [
              "REF", 
              3
            ], 
            "f": [
              "REF", 
              2
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": true, 
          "func_name": "coroutine", 
          "is_zombie": true, 
          "parent_frame_id_list": [], 
          "unique_hash": "coroutine_f1_p_z", 
          "ordered_varnames": [
            "f", 
            "start", 
            "__return__"
          ]
        }, 
        {
          "frame_id": 2, 
          "encoded_locals": {
            "args": [
              "REF", 
              5
            ], 
            "co": [
              "REF", 
              6
            ], 
            "kwargs": [
              "REF", 
              4
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": false, 
          "func_name": "start", 
          "is_zombie": false, 
          "parent_frame_id_list": [
            1
          ], 
          "unique_hash": "start_f2", 
          "ordered_varnames": [
            "args", 
            "kwargs", 
            "co"
          ]
        }, 
        {
          "frame_id": 3, 
          "encoded_locals": {}, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "cosubroutine", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "cosubroutine_f3", 
          "ordered_varnames": []
        }
      ], 
      "globals": {
        "cosubroutine": [
          "REF", 
          3
        ], 
        "coroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "coroutine(f)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "start(*args, **kwargs)", 
          1
        ], 
        "4": [
          "DICT"
        ], 
        "5": [
          "TUPLE"
        ], 
        "6": [
          "generator", 
          "<generator object cosubroutine at 0x242f870>"
        ]
      }, 
      "line": 8, 
      "event": "call"
    }, 
    {
      "ordered_globals": [
        "coroutine", 
        "cosubroutine"
      ], 
      "stdout": "", 
      "func_name": "cosubroutine", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "__return__": [
              "REF", 
              3
            ], 
            "start": [
              "REF", 
              3
            ], 
            "f": [
              "REF", 
              2
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": true, 
          "func_name": "coroutine", 
          "is_zombie": true, 
          "parent_frame_id_list": [], 
          "unique_hash": "coroutine_f1_p_z", 
          "ordered_varnames": [
            "f", 
            "start", 
            "__return__"
          ]
        }, 
        {
          "frame_id": 2, 
          "encoded_locals": {
            "args": [
              "REF", 
              5
            ], 
            "co": [
              "REF", 
              6
            ], 
            "kwargs": [
              "REF", 
              4
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": false, 
          "func_name": "start", 
          "is_zombie": false, 
          "parent_frame_id_list": [
            1
          ], 
          "unique_hash": "start_f2", 
          "ordered_varnames": [
            "args", 
            "kwargs", 
            "co"
          ]
        }, 
        {
          "frame_id": 3, 
          "encoded_locals": {}, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "cosubroutine", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "cosubroutine_f3", 
          "ordered_varnames": []
        }
      ], 
      "globals": {
        "cosubroutine": [
          "REF", 
          3
        ], 
        "coroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "coroutine(f)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "start(*args, **kwargs)", 
          1
        ], 
        "4": [
          "DICT"
        ], 
        "5": [
          "TUPLE"
        ], 
        "6": [
          "generator", 
          "<generator object cosubroutine at 0x242f870>"
        ]
      }, 
      "line": 10, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "coroutine", 
        "cosubroutine"
      ], 
      "stdout": "", 
      "func_name": "cosubroutine", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "__return__": [
              "REF", 
              3
            ], 
            "start": [
              "REF", 
              3
            ], 
            "f": [
              "REF", 
              2
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": true, 
          "func_name": "coroutine", 
          "is_zombie": true, 
          "parent_frame_id_list": [], 
          "unique_hash": "coroutine_f1_p_z", 
          "ordered_varnames": [
            "f", 
            "start", 
            "__return__"
          ]
        }, 
        {
          "frame_id": 2, 
          "encoded_locals": {
            "args": [
              "REF", 
              5
            ], 
            "co": [
              "REF", 
              6
            ], 
            "kwargs": [
              "REF", 
              4
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": false, 
          "func_name": "start", 
          "is_zombie": false, 
          "parent_frame_id_list": [
            1
          ], 
          "unique_hash": "start_f2", 
          "ordered_varnames": [
            "args", 
            "kwargs", 
            "co"
          ]
        }, 
        {
          "frame_id": 3, 
          "encoded_locals": {
            "__return__": null
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "cosubroutine", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "cosubroutine_f3", 
          "ordered_varnames": [
            "__return__"
          ]
        }
      ], 
      "globals": {
        "cosubroutine": [
          "REF", 
          3
        ], 
        "coroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "coroutine(f)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "start(*args, **kwargs)", 
          1
        ], 
        "4": [
          "DICT"
        ], 
        "5": [
          "TUPLE"
        ], 
        "6": [
          "generator", 
          "<generator object cosubroutine at 0x242f870>"
        ]
      }, 
      "line": 10, 
      "event": "return"
    }, 
    {
      "ordered_globals": [
        "coroutine", 
        "cosubroutine"
      ], 
      "stdout": "", 
      "func_name": "start", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "__return__": [
              "REF", 
              3
            ], 
            "start": [
              "REF", 
              3
            ], 
            "f": [
              "REF", 
              2
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": true, 
          "func_name": "coroutine", 
          "is_zombie": true, 
          "parent_frame_id_list": [], 
          "unique_hash": "coroutine_f1_p_z", 
          "ordered_varnames": [
            "f", 
            "start", 
            "__return__"
          ]
        }, 
        {
          "frame_id": 2, 
          "encoded_locals": {
            "args": [
              "REF", 
              5
            ], 
            "co": [
              "REF", 
              6
            ], 
            "kwargs": [
              "REF", 
              4
            ]
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "start", 
          "is_zombie": false, 
          "parent_frame_id_list": [
            1
          ], 
          "unique_hash": "start_f2", 
          "ordered_varnames": [
            "args", 
            "kwargs", 
            "co"
          ]
        }
      ], 
      "globals": {
        "cosubroutine": [
          "REF", 
          3
        ], 
        "coroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "coroutine(f)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "start(*args, **kwargs)", 
          1
        ], 
        "4": [
          "DICT"
        ], 
        "5": [
          "TUPLE"
        ], 
        "6": [
          "generator", 
          "<generator object cosubroutine at 0x242f870>"
        ]
      }, 
      "line": 5, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "coroutine", 
        "cosubroutine"
      ], 
      "stdout": "", 
      "func_name": "start", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "__return__": [
              "REF", 
              3
            ], 
            "start": [
              "REF", 
              3
            ], 
            "f": [
              "REF", 
              2
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": true, 
          "func_name": "coroutine", 
          "is_zombie": true, 
          "parent_frame_id_list": [], 
          "unique_hash": "coroutine_f1_p_z", 
          "ordered_varnames": [
            "f", 
            "start", 
            "__return__"
          ]
        }, 
        {
          "frame_id": 2, 
          "encoded_locals": {
            "__return__": [
              "REF", 
              6
            ], 
            "args": [
              "REF", 
              5
            ], 
            "co": [
              "REF", 
              6
            ], 
            "kwargs": [
              "REF", 
              4
            ]
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "start", 
          "is_zombie": false, 
          "parent_frame_id_list": [
            1
          ], 
          "unique_hash": "start_f2", 
          "ordered_varnames": [
            "args", 
            "kwargs", 
            "co", 
            "__return__"
          ]
        }
      ], 
      "globals": {
        "cosubroutine": [
          "REF", 
          3
        ], 
        "coroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "coroutine(f)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "start(*args, **kwargs)", 
          1
        ], 
        "4": [
          "DICT"
        ], 
        "5": [
          "TUPLE"
        ], 
        "6": [
          "generator", 
          "<generator object cosubroutine at 0x242f870>"
        ]
      }, 
      "line": 5, 
      "event": "return"
    }, 
    {
      "ordered_globals": [
        "coroutine", 
        "cosubroutine", 
        "sub"
      ], 
      "stdout": "", 
      "func_name": "<module>", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "__return__": [
              "REF", 
              3
            ], 
            "start": [
              "REF", 
              3
            ], 
            "f": [
              "REF", 
              2
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": true, 
          "func_name": "coroutine", 
          "is_zombie": true, 
          "parent_frame_id_list": [], 
          "unique_hash": "coroutine_f1_p_z", 
          "ordered_varnames": [
            "f", 
            "start", 
            "__return__"
          ]
        }
      ], 
      "globals": {
        "cosubroutine": [
          "REF", 
          3
        ], 
        "sub": [
          "REF", 
          6
        ], 
        "coroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "coroutine(f)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "start(*args, **kwargs)", 
          1
        ], 
        "6": [
          "generator", 
          "<generator object cosubroutine at 0x242f870>"
        ]
      }, 
      "line": 15, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "coroutine", 
        "cosubroutine", 
        "sub"
      ], 
      "stdout": "", 
      "func_name": "cosubroutine", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "__return__": [
              "REF", 
              3
            ], 
            "start": [
              "REF", 
              3
            ], 
            "f": [
              "REF", 
              2
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": true, 
          "func_name": "coroutine", 
          "is_zombie": true, 
          "parent_frame_id_list": [], 
          "unique_hash": "coroutine_f1_p_z", 
          "ordered_varnames": [
            "f", 
            "start", 
            "__return__"
          ]
        }, 
        {
          "frame_id": 4, 
          "encoded_locals": {}, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "cosubroutine", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "cosubroutine_f4", 
          "ordered_varnames": []
        }
      ], 
      "globals": {
        "cosubroutine": [
          "REF", 
          3
        ], 
        "sub": [
          "REF", 
          6
        ], 
        "coroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "coroutine(f)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "start(*args, **kwargs)", 
          1
        ], 
        "6": [
          "generator", 
          "<generator object cosubroutine at 0x242f870>"
        ]
      }, 
      "line": 10, 
      "event": "call"
    }, 
    {
      "ordered_globals": [
        "coroutine", 
        "cosubroutine", 
        "sub"
      ], 
      "stdout": "", 
      "func_name": "cosubroutine", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "__return__": [
              "REF", 
              3
            ], 
            "start": [
              "REF", 
              3
            ], 
            "f": [
              "REF", 
              2
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": true, 
          "func_name": "coroutine", 
          "is_zombie": true, 
          "parent_frame_id_list": [], 
          "unique_hash": "coroutine_f1_p_z", 
          "ordered_varnames": [
            "f", 
            "start", 
            "__return__"
          ]
        }, 
        {
          "frame_id": 4, 
          "encoded_locals": {
            "y": 2, 
            "x": 1
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "cosubroutine", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "cosubroutine_f4", 
          "ordered_varnames": [
            "x", 
            "y"
          ]
        }
      ], 
      "globals": {
        "cosubroutine": [
          "REF", 
          3
        ], 
        "sub": [
          "REF", 
          6
        ], 
        "coroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "coroutine(f)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "start(*args, **kwargs)", 
          1
        ], 
        "6": [
          "generator", 
          "<generator object cosubroutine at 0x242f870>"
        ]
      }, 
      "line": 11, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "coroutine", 
        "cosubroutine", 
        "sub"
      ], 
      "stdout": "", 
      "func_name": "cosubroutine", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "__return__": [
              "REF", 
              3
            ], 
            "start": [
              "REF", 
              3
            ], 
            "f": [
              "REF", 
              2
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": true, 
          "func_name": "coroutine", 
          "is_zombie": true, 
          "parent_frame_id_list": [], 
          "unique_hash": "coroutine_f1_p_z", 
          "ordered_varnames": [
            "f", 
            "start", 
            "__return__"
          ]
        }, 
        {
          "frame_id": 4, 
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
          "unique_hash": "cosubroutine_f4", 
          "ordered_varnames": [
            "x", 
            "y", 
            "result"
          ]
        }
      ], 
      "globals": {
        "cosubroutine": [
          "REF", 
          3
        ], 
        "sub": [
          "REF", 
          6
        ], 
        "coroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "coroutine(f)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "start(*args, **kwargs)", 
          1
        ], 
        "6": [
          "generator", 
          "<generator object cosubroutine at 0x242f870>"
        ]
      }, 
      "line": 12, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "coroutine", 
        "cosubroutine", 
        "sub"
      ], 
      "stdout": "", 
      "func_name": "cosubroutine", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "__return__": [
              "REF", 
              3
            ], 
            "start": [
              "REF", 
              3
            ], 
            "f": [
              "REF", 
              2
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": true, 
          "func_name": "coroutine", 
          "is_zombie": true, 
          "parent_frame_id_list": [], 
          "unique_hash": "coroutine_f1_p_z", 
          "ordered_varnames": [
            "f", 
            "start", 
            "__return__"
          ]
        }, 
        {
          "frame_id": 4, 
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
          "unique_hash": "cosubroutine_f4", 
          "ordered_varnames": [
            "x", 
            "y", 
            "result", 
            "__return__"
          ]
        }
      ], 
      "globals": {
        "cosubroutine": [
          "REF", 
          3
        ], 
        "sub": [
          "REF", 
          6
        ], 
        "coroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "coroutine(f)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "start(*args, **kwargs)", 
          1
        ], 
        "6": [
          "generator", 
          "<generator object cosubroutine at 0x242f870>"
        ]
      }, 
      "line": 12, 
      "event": "return"
    }, 
    {
      "ordered_globals": [
        "coroutine", 
        "cosubroutine", 
        "sub"
      ], 
      "stdout": "3\n", 
      "func_name": "<module>", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "__return__": [
              "REF", 
              3
            ], 
            "start": [
              "REF", 
              3
            ], 
            "f": [
              "REF", 
              2
            ]
          }, 
          "is_highlighted": false, 
          "is_parent": true, 
          "func_name": "coroutine", 
          "is_zombie": true, 
          "parent_frame_id_list": [], 
          "unique_hash": "coroutine_f1_p_z", 
          "ordered_varnames": [
            "f", 
            "start", 
            "__return__"
          ]
        }
      ], 
      "globals": {
        "cosubroutine": [
          "REF", 
          3
        ], 
        "sub": [
          "REF", 
          6
        ], 
        "coroutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "coroutine(f)", 
          null
        ], 
        "2": [
          "FUNCTION", 
          "cosubroutine()", 
          null
        ], 
        "3": [
          "FUNCTION", 
          "start(*args, **kwargs)", 
          1
        ], 
        "6": [
          "generator", 
          "<generator object cosubroutine at 0x242f870>"
        ]
      }, 
      "line": 15, 
      "event": "return"
    }
  ]
}
