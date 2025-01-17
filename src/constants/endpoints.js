const user = {
  getUsers: () => `/users`,
  deleteUserById: () => `/user/:userId`,
};

export { user };

const properties = {
  getAllProperties: () => `/properties`,
  getLocations: () => `/locations`,
};

export { properties };

const Types = {
  getPropertyTypes: () => `/property_types`,
};
export { Types };

const Status = {
  getPropertyStatuses: () => `/property_statuses`,
};

export { Status };

// const Filter = {
//   getFilterProperty: ({
//     location,
//     price,
//     propertyTypes,
//     propertyStatuses,
//     rooms,
//     bedrooms,
//     bathrooms,
//     sizeSqMeters,
//     listedDate,
//   }) =>
//     `/properties/filter/${location}/${price}/${propertyTypes}/${propertyStatuses}/${rooms}/${bedrooms}/${bathrooms}/${sizeSqMeters}/${listedDate}`,
// };

// export { Filter };

const Location = {
  getPropertyByLocation: ({ location }) => `/property/${location}`,
};

export { Location };

const login = {
  postLogin: () => `/login`,
};

export { login };

const deleteUser = {
  deleteUserById: () => `/user/:userId`,
};

export { deleteUser };

const patchPassword = {
  patchAllPasswordsFromUsers: () => `/users/newPassword/:userId`,
};

export { patchPassword };

const register = {
  postUser: () => `/register`,
};

export { register };
