function hej (score, max) {
    const grade
    let percent = score / max * 100

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


console.log(hej(13, 20))