/**
 * GET/
 *  Dashboard
 */
exports.dashboard = async(req,res)=>{
    const locals = {
        title: "DashBoard",
        description: "Free NodeJs Notes App.",
    }

    res.render('dashboard/index',{locals,
    layout: '../views/layout/dashboard'
});
}
