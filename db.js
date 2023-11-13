const Pool = require('pg').Pool

const pool = new Pool(
    {
        user: 'postgres',
        password: 'admin',
        host: 'localhost',
        port: 5432,
        database: 'postgres'
    }
)
/* localhost:8080/api/user-actions?userId=20&page=1

[
    {
        "id": 4,
        "created_at": "2023-11-12T21:18:48.493Z",
        "edited_at": null,
        "user_id": "20"
    },
    {
        "id": 7,
        "created_at": null,
        "edited_at": "2023-11-12T21:28:47.361Z",
        "user_id": "20"
    },
    {
        "id": 6,
        "created_at": null,
        "edited_at": "2023-11-12T21:28:18.028Z",
        "user_id": "20"
    }
]
*/

module.exports = pool