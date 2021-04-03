class AddRelationArticleUser < ActiveRecord::Migration[6.1]
  def change
    add_reference :articles, :user, index: true
  end
end
