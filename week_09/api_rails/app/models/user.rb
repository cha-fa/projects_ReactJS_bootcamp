class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::Allowlist

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable :recoverable, :rememberable, :validatable and :omniauthable
  devise :database_authenticatable, :registerable,
  :jwt_authenticatable, jwt_revocation_strategy: self
  validates :email, presence: true
  has_many :articles
  has_many :comments, dependent: :destroy
end

