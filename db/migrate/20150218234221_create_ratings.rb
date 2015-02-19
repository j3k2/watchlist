class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|
	
      t.integer :user_id
      t.integer :show_id
      t.integer :value
      
      t.timestamps
    end
    
    add_index :ratings, [:user_id, :show_id]
  end
end
