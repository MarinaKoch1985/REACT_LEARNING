export const workers = [
    {
        id: 1,
        firstname: 'Alex',
        lastname: 'Koch',
        position: 'IT-manager',
        in_office: true,
        avatar: '../media/face_1.jpeg',
        tasks: [
            {
              id: 1,
              task: 'Pick up document',
              done: true
            },
            {
              id: 2,
              task: 'Do homework',
              done: false
            },
            {
              id: 3,
              task: 'Go to workplace',
              done: true
            }
          ]
    },
    {
        id: 2,
        firstname: 'Olga',
        lastname: 'Jacob',
        position: 'Assistent',
        in_office: false,
        avatar: '../media/face_4.jpeg',
        tasks: [
          {
            id: 1,
            task: 'Pick up document',
            done: false
          },
          {
            id: 2,
            task: 'Do homework',
            done: true
          },
          {
            id: 3,
            task: 'Go to workplace',
            done: true
          }
        ]

    },
    {
        id: 3,
        firstname: 'Steffani',
        lastname: 'Schuster',
        position: 'CEO',
        in_office: true,
        // avatar: './media/face_2.jpeg'
        tasks: [
          {
            id: 1,
            task: 'Pick up document',
            done: false
          },
          {
            id: 2,
            task: 'Do homework',
            done: false
          },
          {
            id: 3,
            task: 'Go to workplace',
            done: true
          }
        ]

    }
]