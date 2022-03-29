import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ShopMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PromotionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ShopProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PromotionProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Product {
  readonly id: string;
  readonly name?: string | null;
  readonly price?: string | null;
  readonly weight?: string | null;
  readonly brand?: string | null;
  readonly shops?: (ShopProduct | null)[] | null;
  readonly promotions?: (PromotionProduct | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Shop {
  readonly id: string;
  readonly name?: string | null;
  readonly location?: string | null;
  readonly logo?: string | null;
  readonly preperation?: string | null;
  readonly delivery?: string | null;
  readonly layout?: string | null;
  readonly open_hours?: string | null;
  readonly closed_hours?: string | null;
  readonly Products?: (ShopProduct | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Shop, ShopMetaData>);
  static copyOf(source: Shop, mutator: (draft: MutableModel<Shop, ShopMetaData>) => MutableModel<Shop, ShopMetaData> | void): Shop;
}

export declare class Promotion {
  readonly id: string;
  readonly Promo?: string | null;
  readonly quantity?: string | null;
  readonly merci_exclusive?: string | null;
  readonly min_purchase?: string | null;
  readonly max_purchase?: string | null;
  readonly expiration?: string | null;
  readonly Products?: (PromotionProduct | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Promotion, PromotionMetaData>);
  static copyOf(source: Promotion, mutator: (draft: MutableModel<Promotion, PromotionMetaData>) => MutableModel<Promotion, PromotionMetaData> | void): Promotion;
}

export declare class User {
  readonly id: string;
  readonly image?: string | null;
  readonly Shop?: Shop | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userShopId?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class ShopProduct {
  readonly id: string;
  readonly product: Product;
  readonly shop: Shop;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ShopProduct, ShopProductMetaData>);
  static copyOf(source: ShopProduct, mutator: (draft: MutableModel<ShopProduct, ShopProductMetaData>) => MutableModel<ShopProduct, ShopProductMetaData> | void): ShopProduct;
}

export declare class PromotionProduct {
  readonly id: string;
  readonly product: Product;
  readonly promotion: Promotion;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PromotionProduct, PromotionProductMetaData>);
  static copyOf(source: PromotionProduct, mutator: (draft: MutableModel<PromotionProduct, PromotionProductMetaData>) => MutableModel<PromotionProduct, PromotionProductMetaData> | void): PromotionProduct;
}