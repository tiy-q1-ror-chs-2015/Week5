class AddImageToGladiators < ActiveRecord::Migration
  def change
    add_column :gladiators, :image, :text
  end
end
