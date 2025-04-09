import { commonActions } from "./slice/commonSlice";
import { userActions } from "./slice/userSlice";

const allActions = {
    ...userActions,
    ...commonActions
}

export default allActions;