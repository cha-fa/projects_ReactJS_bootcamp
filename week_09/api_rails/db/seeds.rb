# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

Article.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!(Article.table_name)


User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!(User.table_name)


10.times do |user|
  User.create(email:Faker::Internet.email, password:"coucoucou")
end

30.times do |article|
  Article.create(title: Faker::ChuckNorris.fact, content:Faker::Quote.matz, user: User.all.sample)
end

puts "seed is finished"
