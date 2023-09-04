interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Chef', 'Receptionist', 'Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine v3',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage Reservations', 'View Menu Items'],
  ownerAbilities: ['Manage Restaurant', 'Invite Employees to Restaurant'],
};
