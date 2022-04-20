import FingerpintJS from '@fingerprintjs/fingerprintjs-pro'

const fpPromise = FingerprintJS.load({
    apiKey: 'hKIUEQzYPom1jWu5TzDL'
})

fpPromise
    .then(fp => fp.get())
    .then(result => console.log(result.visitorID))