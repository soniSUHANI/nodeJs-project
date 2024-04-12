//GET Homepage

exports.homepage = async(req,res)=>{
    const locals = {
        title: "NotesSavvy",
        description: "Free NodeJs Notes App.",
    }

    res.render('index',{locals,
    layout: '../views/layout/front-page'
});
}

exports.about = async(req,res)=>{
    const locals = {
        title: "About-NotesSavvy",
        description: "Free NodeJs Notes App.",
    }

    res.render('about',locals);
}