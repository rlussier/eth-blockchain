App = {
    load: async () => {
        await App.loadWeb3()
        console.log("App loading...")
    }
}
    $(() => {
        $(window).load(() => {
            App.load()
        })
    })
