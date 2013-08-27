{
  "code": "def subrutine(name):\n    print \"Hello\", name\n\nsubrutine('World')", 
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
        "subrutine"
      ], 
      "stdout": "", 
      "func_name": "<module>", 
      "stack_to_render": [], 
      "globals": {
        "subrutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "subrutine(name)", 
          null
        ]
      }, 
      "line": 4, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "subrutine"
      ], 
      "stdout": "", 
      "func_name": "subrutine", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "name": "World"
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "subrutine", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "subrutine_f1", 
          "ordered_varnames": [
            "name"
          ]
        }
      ], 
      "globals": {
        "subrutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "subrutine(name)", 
          null
        ]
      }, 
      "line": 1, 
      "event": "call"
    }, 
    {
      "ordered_globals": [
        "subrutine"
      ], 
      "stdout": "", 
      "func_name": "subrutine", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "name": "World"
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "subrutine", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "subrutine_f1", 
          "ordered_varnames": [
            "name"
          ]
        }
      ], 
      "globals": {
        "subrutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "subrutine(name)", 
          null
        ]
      }, 
      "line": 2, 
      "event": "step_line"
    }, 
    {
      "ordered_globals": [
        "subrutine"
      ], 
      "stdout": "Hello World\n", 
      "func_name": "subrutine", 
      "stack_to_render": [
        {
          "frame_id": 1, 
          "encoded_locals": {
            "__return__": null, 
            "name": "World"
          }, 
          "is_highlighted": true, 
          "is_parent": false, 
          "func_name": "subrutine", 
          "is_zombie": false, 
          "parent_frame_id_list": [], 
          "unique_hash": "subrutine_f1", 
          "ordered_varnames": [
            "name", 
            "__return__"
          ]
        }
      ], 
      "globals": {
        "subrutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "subrutine(name)", 
          null
        ]
      }, 
      "line": 2, 
      "event": "return"
    }, 
    {
      "ordered_globals": [
        "subrutine"
      ], 
      "stdout": "Hello World\n", 
      "func_name": "<module>", 
      "stack_to_render": [], 
      "globals": {
        "subrutine": [
          "REF", 
          1
        ]
      }, 
      "heap": {
        "1": [
          "FUNCTION", 
          "subrutine(name)", 
          null
        ]
      }, 
      "line": 4, 
      "event": "return"
    }
  ]
}
