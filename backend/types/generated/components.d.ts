import type { Schema, Struct } from '@strapi/strapi';

export interface SharedSaleitem extends Struct.ComponentSchema {
  collectionName: 'components_shared_saleitems';
  info: {
    displayName: 'Saleitem';
  };
  attributes: {
    price: Schema.Attribute.Decimal;
    product: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    quantity: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.saleitem': SharedSaleitem;
    }
  }
}
