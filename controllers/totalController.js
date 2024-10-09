import Phases from "../models/phasesModel.js";
import SaleProperty from "../models/salePropertyModel.js";
import PurchaseProperty from "../models/purchasePropertyModel.js";
import PropertyDealer from "../models/propertyDealerModel.js";
import User from "../models/userModel.js";
import Engineers from "../models/engineersModel.js";
import Events from "../models/eventsModel.js";
import Activity from "../models/activityModel.js";
import Affiliates from "../models/affiliatesModel.js";
import Notice from "../models/noticeModel.js";
import RegistrationProperty from "../models/registrationPropertyModel.js";
import catchAsync from "../utils/catchAsync.js";

export const getTotals = catchAsync(async (req, res, next) => {
  const totalPhases = await Phases.countDocuments();
  const totalSalesProperty = await SaleProperty.countDocuments();
  const totalPurchaseProperty = await PurchaseProperty.countDocuments();
  const totalNotice = await Notice.countDocuments();
  const totalPropertyDealers = await PropertyDealer.countDocuments();
  const totalUsers = await User.countDocuments();
  const totalEngineers = await Engineers.countDocuments();
  const totalEvents = await Events.countDocuments();
  const totalRegisterProperty = await RegistrationProperty.countDocuments();

  res.status(200).json({
    status: "success",
    doc: {
      totalPhases,
      totalSalesProperty,
      totalPurchaseProperty,
      totalNotice,
      totalPropertyDealers,
      totalUsers,
      totalEngineers,
      totalEvents,
      totalRegisterProperty,
    },
  });
});
