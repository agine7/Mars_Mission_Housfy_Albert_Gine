//Mars_Mission_Housfy_Albert_Giné_Gonzalez
//21-02-2022
//Level Test

class Rover {
    constructor(location, direction, grid, obstacles) {
        this.x = (location === undefined) ? 0 : location[0]
        this.y = (location === undefined) ? 0 : location[1]
        this.directions = ['N', 'E', 'S', 'W']
        this.direction = (this.directions.includes(direction)) ? direction : 'N'
        this.grid = (grid === undefined) ? [200, 200] : grid;
        this.obstacles = (obstacles === undefined) ? [] : obstacles
    }


    //Comandos
    commands(commands) {
        if(commands === undefined) {
            return this.cmds
        } else {
            let cmds = commands.toUpperCase().split('')
            this.cmds = cmds

            for(let i = 0; i < cmds.length; i++){
                if(cmds[i] === 'F') {
                    if(this.moveForward(this.direction, this.obstacles)){
                        console.log('Adelante una posición [' + this.x + ', ' + this.y + ']')
                    } else {
                        break
                    }
                } else if (cmds[i] === 'R' || cmds[i] === 'L') {
                    this.turnRover(cmds[i])
                    console.log('Vuelve hacia la cara ' + this.direction)
                }
            }
        }
    }
    
    //Direcciones
    moveForward(direction, obstacles) {
        let yChange = 0, 
            xChange = 0
       
        switch (direction) {
            case 'N':
                yChange = 1
                break
            case 'E':
                xChange = 1
                break;
            case 'S':
                yChange = -1
                break
            case 'W':
                xChange = -1
                break
        }

        //Actualizar posición
        let nextPos = [this.x + xChange, this.y + yChange],
            obstacleFound = false

        for(let i = 0; i < obstacles.length; i++){
            console.log('Próxima posición es ' + nextPos + ' obstaculo a ' + obstacles[i])
                if(JSON.stringify(nextPos) === JSON.stringify(obstacles[i])){
                    obstacleFound = true
                    break
                }
        }

        //Si encontramos obstaculo
        if(obstacleFound){
            console.log('obstaculo encontrado a ' + nextPos + ' aborting mission')
            return false
        } else {    
            this.x = nextPos[0]
            this.y = nextPos[1]

            if(this.x < 0) {
                this.x = this.grid[0]
            } else if(this.x > this.grid[0]) {
                this.x = 0
            } else if(this.y < 0) {
                this.y = this.grid[0]
            } else if(this.y > this.grid[0]) {
                this.y = 0
            }
            

            return true
        }
    }

    //LeftorRight
    turnRover(command) {
        const directionIndex = this.directions.indexOf(this.direction)
        if (command === 'L') {
            const newDirectionIndex = directionIndex - 1
            if (newDirectionIndex < 0) {
                this.direction = this.directions[3]
            } else {
                this.direction = this.directions[newDirectionIndex]
            }
            
        } else if (command === 'R') {
            const newDirectionIndex = directionIndex + 1
            if (newDirectionIndex > 3) {
                this.direction = this.directions[0]
            } else {
                this.direction = this.directions[newDirectionIndex]
            }
            
        }
    }  
}

module.exports = {
    Rover
  };