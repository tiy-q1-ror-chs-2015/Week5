class CreateGladiators < ActiveRecord::Migration
  def change
    create_table :gladiators do |t|
      t.string :name
      t.integer :hp
      t.integer :damage

      t.timestamps null: false
    end
  end
end
