/*
  Warnings:

  - You are about to drop the column `nome_completo` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `Contact` table. All the data in the column will be lost.
  - Added the required column `name` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "nome_completo",
DROP COLUMN "telefone",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;
