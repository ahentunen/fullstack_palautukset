sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa [{content: "note", date:"date"}]
    Note right of browser: The browser sends a POST request with the Content-Type application/json
    activate server
    server-->>browser: Status code 201 Created
    Note right of browser: The server responses with status code 201, which informors that the new addition was succesful
    deactivate server