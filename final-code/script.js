var planetEnum = {
    index: 'index',
    venus: 'venus',
    earth: 'earth',
    mars: 'mars',
    jupiter: 'jupiter',
    uranus: 'uranus',
    neptune: 'neptune'
}

const pathname = window.location.pathname.split("/").pop()

const planet = pathname ? (pathname.split('.')[0] === 'index' ? 'mercury': pathname.split('.')[0]) : 'mercury'

const planetImage = document.getElementsByClassName('planet-image')[0]
planetImage.style.backgroundImage = `url('./assets/planet-${planet}.svg')`

//if (window.location.href.includes('index')) {
    // console.log('Let\'s go')
    // const planetImage = document.getElementsByClassName('planet-image')
    // planetImage.style.backgroundImage = `url(./assets/{})`
//}