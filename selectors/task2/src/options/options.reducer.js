import { TOGGLE_OPTION } from "./options.actions";
const options = [
  {
    id: "id-0",
    name: "19-inch wheels",
  },
  {
    id: "id-1",
    name: "Leather-trimmed Sport Seats",
  },
  {
    id: "id-2",
    name: "B&O Sound System",
  },
  {
    id: "id-3",
    name: "Adaptive Cruise Control",
  },
  {
    id: "id-4",
    name: "Daytime running lights",
  },
  {
    id: "id-5",
    name: "Auto High-Beam Headlamps",
  },
  {
    id: "id-6",
    name: "Carbon Sport Interior",
  },
];

const initialState = {
  options: {
    optionsList: options,
    selected: [],
  },
};

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_OPTION: {
      const { optionId } = action.payload;
      const newSelectedIds = state.options.selected.includes(optionId)
        ? state.options.selected.filter((id) => id !== optionId)
        : state.options.selected.concat(optionId);

      return {
        ...state,
        options: {
          optionsList: state.options.optionsList,
          selected: newSelectedIds,
        },
      };
    }
    default:
      return state;
  }
};

export default optionsReducer;
