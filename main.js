const LinksSocialMedia = {
  github: 'Ruvitt',
  youtube: 'channel/UCrabAhvDQI45yjUKcm6yPQw',
  linkedin: 'in/ruan-cordeiro-5873a4216',
  instagram: 'ru_vitor',
  twitter: 'ru_art2'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.href = data.login
    })
}

getGithubProfileInfos()
