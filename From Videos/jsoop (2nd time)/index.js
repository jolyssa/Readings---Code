//make a stopwatch function that starts() and stops(), but cannot be called twice or else you will get an error.

//we can get the duration of the time between start and stop w/ .duration and we can also reset the time with .reset()

class Stopwatch{
    constructor(startTime,endTime,running,duration){
        this.startTime = startTime
        this.endTime = endTime
        this.running = running
        this.duration = duration
    }
    start(){
        if (this.running){
            throw new Error('Stopwatch is already running!')
        }
        this.running = true
        this.startTime = new Date()
    }
    stop(){
        if (!this.running){
            throw new Error('Stopwatch has not been started.')
        }
        this.running = false
        this.endTime = new Date()

        const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000

        this.duration += seconds
    }
    reset(){
        this.startTime = null
        this.endTime = null
        thisrunning = false
        thisduration = 0
    }
}

const one = new Stopwatch

console.log(one.start())
console.log(one.stop())
console.log(one.duration)

jsut doing a test for the noise are any of these words keywords in javascriptn or no? in and of are definitely but how about any other ones?
doing another test for key wrods like unmmm im i love my baby so much she is the best in the world even when im dysregulated and think anything else localStorage...Stopwatch. omfg this thing is not working exactl how i want it to ans it is really frstrating me to the max!!

class Stopwatch(){
    constructor(endTime,startTime){
        this.startTime = startTime
        this.endTime = endTime
    }

    start(){
        console.log('i am starting now mutherfucker!')
    }
    endTime()
}{
    console.log('i am done staritn gnow muthererrerjsoejroj!
        
        ')
}

class Stopwatch(){
    constructor(endtime, starttime){
        this.startTime = startTime
        this.endTime = end TimeRanges
    }
    console.log('end time
    ')
    end(){
        console.log"('enddd')
    }
}