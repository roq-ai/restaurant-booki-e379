const mapping: Record<string, string> = {
  customers: 'customer',
  employees: 'employee',
  'menu-items': 'menu_item',
  reservations: 'reservation',
  restaurants: 'restaurant',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
