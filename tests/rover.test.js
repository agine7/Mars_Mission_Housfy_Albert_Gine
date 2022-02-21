const Rover = require('../src/Rover.js').Rover

describe('Mars Rover', function() {

    describe('Starting point (x,y) of a rover and the direction (N,E,S,W) it is facing.', function() {
        
        test('Posición inicial 0,0 ', () => {
            const MarsRover = new Rover()
            
            expect(MarsRover.x).toBe(0)
            expect(MarsRover.y).toBe(0)
            expect(MarsRover.direction).toBe('N')
        })
    })

    describe('Colección de comandas', function() {
        test('Comandas:', () => {
            const MarsRover = new Rover([12, 2], 'S')
            MarsRover.commands('FRFFL')
            expect(MarsRover.commands()).toStrictEqual(['F','R','F','F','L'])
        })
    })

    describe('Rover hacia delante (F)', function() {
        test('Rover increases Y por F', () => {
            const MarsRover = new Rover([1, 1], 'N')
            MarsRover.commands('FF')
            
            expect(MarsRover.x).toStrictEqual(1)
            expect(MarsRover.y).toStrictEqual(3)
        })
    })

    describe('Rover va izquierda o derecha', function() {
            
        test('Rover hacia izquierda o derecha L,W', () => {
            const MarsRover = new Rover([1, 1], 'N')
            MarsRover.commands('L')
                
            expect(MarsRover.direction).toBe('W')
        })
    })
})