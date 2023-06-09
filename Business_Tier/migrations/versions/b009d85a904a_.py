"""empty message

Revision ID: b009d85a904a
Revises: d6c74590a584
Create Date: 2023-06-04 02:36:58.242793

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b009d85a904a'
down_revision = 'd6c74590a584'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('category',
               existing_type=sa.VARCHAR(),
               nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('category',
               existing_type=sa.VARCHAR(),
               nullable=True)

    # ### end Alembic commands ###
