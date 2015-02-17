class CreateListsShows < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.integer :show_id
      t.integer :list_id
      t.timestamps
    end
  end
end
