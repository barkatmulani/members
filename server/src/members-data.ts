import { Member } from './models.ts';

const members: Member[] = [
    {
        id: '1',
        email: 'john.doe@gmail.com',
        firstName: 'John',
        lastName: 'Doe',
        details: {
            memberType: 'Silver'
        },
        visits: [            {
            facility: 'Snap Fitness',
            visitDate: '6 Feb 2024',
            visitTime: '3:00 pm'
        },
        {
            facility: 'Fitness Plus',
            visitDate: '18 May 2024',
            visitTime: '12:00 pm'
        },
    ]
    },
    {
        id: '2',
        email: 'james.doe@gmail.com',
        firstName: 'James',
        lastName: 'Doe',
        details: {
            memberType: 'Bronze'
        },
        visits: [
            {
                facility: 'Fitness Plus',
                visitDate: '1 Jan 2024',
                visitTime: '3:30 pm'
            },
            {
                facility: 'Fitness Plus',
                visitDate: '3 Jan 2024',
                visitTime: '2:00 pm'
            },
            {
                facility: 'Urban Gym',
                visitDate: '15 Jun 2024',
                visitTime: '11:00 am'
            },
        ]
    },
    {
        id: '3',
        email: 'jane.doe@gmail.com',
        firstName: 'Jane',
        lastName: 'Doe',
        details: {
            memberType: 'Silver'
        },
        visits: [
            {
                facility: 'Urban Gym',
                visitDate: '10 Feb 2024',
                visitTime: '9:00 am'
            },
            {
                facility: 'Urban Gym',
                visitDate: '12 Mar 2024',
                visitTime: '12:00 pm'
            },
            {
                facility: 'Anytime Gym',
                visitDate: '25 Apr 2024',
                visitTime: '10:00 am'
            },
            {
                facility: 'Urban Gym',
                visitDate: '16 Aug 2024',
                visitTime: '1:00 pm'
            }
        ]
    },
    {
        id: '4',
        email: 'peter.pan@gmail.com',
        firstName: 'Peter',
        lastName: 'Pan',
        details: {
            memberType: 'Gold'
        },
        visits: [
            {
                facility: 'Yoga Club',
                visitDate: '8 Feb 2024',
                visitTime: '3:30 pm'
            },
            {
                facility: 'Yoga Club',
                visitDate: '18 Apr 2024',
                visitTime: '2:00 pm'
            },
        ]
    },
    {
        id: '5',
        email: 'mary.jane@gmail.com',
        firstName: 'Mary',
        lastName: 'Jane',
        details: {
            memberType: 'Bronze'
        },
        visits: [
        {
            facility: 'Anytime Gym',
            visitDate: '1 Jan 2024',
            visitTime: '3:30 pm'
        },
        {
            facility: 'Anytime Gym',
            visitDate: '22 Mar 2024',
            visitTime: '4:00 pm'
        },
    ]}
];

export default members;