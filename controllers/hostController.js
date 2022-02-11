const HostModel = require('../models/hostModel');
// const router = require('../routes/accommodationRoutes');

exports.getAllHost = async (req, res) => {
  try {
    const hosts = await HostModel.find({});

    await res.json({
      status: 'success',
      message: 'Hosts retrieved successfully',
      data: hosts,
    });
  } catch (err) {
    res.json({
      status: 'error',
      message: err.message,
    });
  }
};

// CREATE NEW HOST
exports.newHost = (req, res) => {
  let host = new HostModel();

  host.hostName = req.body.hostName;
  host.hostSince = req.body.hostSince;
  host.aboutHost = req.body.aboutHost;
  host.duringstay = req.body.duringstay;
  host.superHost = req.body.superHost;
  host.contactHost.languages = req.body.languages;
  host.contactHost.responseTime = req.body.responseTime;
  host.contactHost.alwaysAvaliable = req.body.alwaysAvaiable;
  host.contactHost.email = req.body.email;
  host.contactHost.phone = req.body.phone;

  host.save((err) => {
    if (err) {
      res.json(err);
    }
    res.json({
      message: 'New host created',
      data: host,
    });
  });
};
