class CreateOrderRequest < ActiveRecord::Migration[6.0]
  def change
    create_table :order_requests do |t|
      t.string :name
      t.string :connection
      t.string :cities
      t.integer :sms_quantity
      t.float :price
      t.text :business_description
      t.text :target_audience_description
      t.text :type
    end
  end
end
