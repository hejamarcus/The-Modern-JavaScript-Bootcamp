function hej (score, max) {
    if (typeof score !== 'number' || typeof max !== 'number'){
        throw Error('inputs must be numbers!')
    }
    
    let grade = ''
    const percent = score / max * 100

    if (percent >= 90) {
        grade = 'A'
    } else if (percent >= 80) {
        grade = 'B'
    } else if (percent >= 70) {
        grade = 'C'
    } else if (percent >= 60) {
        grade = 'D'
    } else {
        grade = 'F'
    }

    return `${score}/${max} -> You got a ${grade} (${percent}%)!`
}

try {
    console.log(hej(13, 20))
} catch (e){
    console.log(e.message)
}