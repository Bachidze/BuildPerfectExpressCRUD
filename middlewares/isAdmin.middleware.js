const isViewer = (req, res, next) => {
    const roles = req.headers['roles']?.toLowerCase().split(',') || [];
    if (!roles.includes("editor") && !roles.includes('admin') && !roles.includes("viewers")) {
        return res.status(401).json({ message: "Not Auth", data: null });
    }
    next();
};
const isEditor = (req, res, next) => {
    const roles = req.headers['roles']?.toLowerCase().split(',') || [];
    if (!roles.includes("editor") && !roles.includes('admin')) {
        return res.status(401).json({ message: "Not Auth", data: null });
    }
    next();
};

const isAdmin = (req, res, next) => {
    const roles = req.headers['roles']?.toLowerCase().split(',') || [];
    console.log(roles);
    if (!roles.includes("admin")) {
        return res.status(401).json({ message: "Not Auth", data: null });
    }
    next();
};

module.exports = { isEditor, isAdmin, isViewer};
