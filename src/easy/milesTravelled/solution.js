milesTravelled = (mins, speed) => {
    const result = mins * (speed / 60)
    return Math.round(result)
}

console.log(milesTravelled(4, 36))