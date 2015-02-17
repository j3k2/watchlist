class CreateShows < ActiveRecord::Migration
  def change
    create_table :shows do |t|
      t.string :title
      t.text :desc
      t.string :imgUrl
      
      t.timestamps
    end
  end
end
