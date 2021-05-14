const item = [
    {
        id: '1',
        fecha: '25/05/2021',
        titulo: 'El buen Samaritano',
        hora: '17:00',
        capacidad: '50',
        cupo: '35'

    },
    {
        id: '2',
        fecha: '25/05/2021',
        titulo: 'Pascuas',
        hora: '19:00',
        capacidad: '50',
        cupo: '12'

    },
    {
        id: '3',
        fecha: '26/05/2021',
        titulo: 'Como te ven te tratan',
        hora: '19:00',
        capacidad: '50',
        cupo: '20'

    }
]

const getItem = () => {
    return new Promise((res, rej)=>{
        setTimeout(() =>{
            res(item)
        }, 2000);
    }

    )
}

export default getItem