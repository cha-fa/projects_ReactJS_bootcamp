class AddPrivateToArticle < ActiveRecord::Migration[6.1]
  def change
    add_column :articles, :is_private, :boolean, default: false
  end
end
