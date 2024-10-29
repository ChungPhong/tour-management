import { Express } from "express";
import { categoryRoutes } from "./category.route";
import { systemConfig } from "../../config/system";
export const adminRoutes = (app: Express): void => {
  const PATH_ADMIN = `/${systemConfig.prefixAdmin}`;

  app.use(`${PATH_ADMIN}/categories`, categoryRoutes);
};