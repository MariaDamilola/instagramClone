const Bio = () => {
    

return `
<section class="bio">
            <div class="profile-photo">
                <img src="img/kevin.jpg" alt="">
            </div>
            <div class="profile-info">
                <p class="username">Kevinhart4real</p>
                <button>Edit Bio</button>
            </div>
            <form class="edit-bio-form">
                <input type="text" id="name" placeholder="name"/>
                <button type="submit">Submit</button>
            </form>
        </section>
`
}
export default Bio;