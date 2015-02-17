class CreateListsShows < ActiveRecord::Migration
  def change
    create_table :lists_shows do |t|
      t.integer :show_id
      t.integer :list_id
      t.timestamps
    end
  end
end
